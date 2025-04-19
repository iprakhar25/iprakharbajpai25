using Microsoft.AspNetCore.Mvc;
using backend.Services;
using System.Threading.Tasks;
using System.Linq;

namespace backend.Controllers
{
    [Route("api/github")]
    [ApiController]
    public class GitHubController : ControllerBase
    {
        private readonly GitHubService _gitHubService;
        private static readonly string[] SelectedRepoNames = { "to-do", "double-vertical", "Nexus"}; // Add your desired repositories

        public GitHubController(GitHubService gitHubService)
        {
            _gitHubService = gitHubService;
        }

        [HttpGet("projects")]
        public async Task<IActionResult> GetRepositories()
        {
            var projects = await _gitHubService.GetRepositoriesAsync();
            var selectedProjects = projects.Where(repo => SelectedRepoNames.Contains(repo.Name)).ToList();
            return Ok(selectedProjects);
        }
    }
}
