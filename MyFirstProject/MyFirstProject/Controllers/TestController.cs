using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        // GET localhost:xx/api/test/method1 -> "Hello World"
        [HttpGet(template:"Method1")]
        public string Method1()
        {
            return "Hello World";
        }

        // GET :localhost:xx/api/test/method2 -> 5125
        [HttpGet(template:"Method2")]
        public int Method2()
        {
            return 5125;
        }

        // POST: localhost:xx/api/test/method3 -> "A post request"
        [HttpPost(template:"Method3")]
        public string Method3() 
        {
            return "A POST request";
        }

    }
}
