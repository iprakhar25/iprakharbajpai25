using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using backend.Models;

namespace backend.Services
{
    public class GitHubService
    {
        private readonly HttpClient _httpClient;
        private readonly string _githubUsername;
        private const string GitHubApiUrl = "https://api.github.com/users/{0}/repos";

        public GitHubService(IConfiguration configuration)
        {
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("request"); // Required by GitHub API
            _githubUsername = configuration["GitHubUsername"] ?? "your-github-username";
        }

        public async Task<List<GitHubProject>> GetRepositoriesAsync()
        {
            var url = string.Format(GitHubApiUrl, _githubUsername);
            var response = await _httpClient.GetAsync(url);

            if (!response.IsSuccessStatusCode)
                return new List<GitHubProject>();

            var content = await response.Content.ReadAsStringAsync();
            var repositories = JsonSerializer.Deserialize<List<GitHubRepo>>(content, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return repositories?.ConvertAll(repo => new GitHubProject
            {
                Name = repo.Name,
                Description = repo.Description,
                Url = repo.HtmlUrl
            }) ?? new List<GitHubProject>();
        }
    }
}
