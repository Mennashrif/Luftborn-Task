using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReportSystem.Application.Features.Account.Queries.Login;
using ReportSystem.Application.Features.Common.DTO;
using ReportSystem.Application.Features.Users.Queries.LoggedInUser;

namespace ReportSystem.API.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class AccountController(IMediator mediator) : ApiBaseController
    {
        private readonly IMediator _mediator = mediator;

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<ResponseDTO>> Login([FromBody] LoginQuery command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }

        [HttpGet("Profile")]
        public async Task<ActionResult<ResponseDTO>> GetProfile()
        {
            var response = await _mediator.Send(new LoggedInUserQuery());
            return Ok(response);
        }

    }
}