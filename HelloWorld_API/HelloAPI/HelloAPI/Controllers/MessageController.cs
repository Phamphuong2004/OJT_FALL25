using HelloAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HelloAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessageController : ControllerBase
    {
        
        private readonly IMessageRepositoryInterface _messageRepository;
        public MessageController(IMessageRepositoryInterface messageRepository)
        {
            _messageRepository = messageRepository;
        }
        [HttpGet("messages")]
        public async Task<IActionResult> GetMessages()
        {
            var messages = await _messageRepository.GetAllMessagesAsync();
            return Ok(messages);
        }

        [HttpPut("update-messages")]
        public async Task<IActionResult> UpdateMessage([FromBody] Models.Message message)
        {
            try
            {
                var updatedMessage = await _messageRepository.UpdateMessage(message);
                return Ok(updatedMessage);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
    }
}
