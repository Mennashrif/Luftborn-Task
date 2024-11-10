using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReportSystem.Application.Features.Common.DTO;
using ReportSystem.Application.Features.Users.Commands.AddUser;
using ReportSystem.Application.Features.Users.Commands.DeleteUser;
using ReportSystem.Application.Features.Users.Commands.EditUser;
using ReportSystem.Application.Features.Users.Queries.GetUsers;

namespace ReportSystem.API.Controllers
{

    [Authorize]
    public class UserController(IMediator mediator) : ApiBaseController
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet]
        public async Task<ActionResult<ResponseDTO>> Get()
        {
            var response = await _mediator.Send(new GetUsersQuery());
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<ResponseDTO>> Post([FromBody] AddUserCommand addUserCommand)
        {
            var response = await _mediator.Send(addUserCommand);
            return Ok(response);
        }

        [HttpPut]
        public async Task<ActionResult<ResponseDTO>> Put([FromBody] EditUserCommand editUserCommand)
        {
            var response = await _mediator.Send(editUserCommand);
            return Ok(response);
        }

        [HttpDelete("{userId}")]
        public async Task<ActionResult<ResponseDTO>> Delete(int userId)
        {
            var response = await _mediator.Send(new DeleteUserCommand() { UserId = userId });
            return Ok(response);
        }
    }

}
