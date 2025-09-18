using HelloAPI.Interfaces;
using HelloAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HelloAPI.Repositories
{
    public class MessageRepository : IMessageRepositoryInterface
    {
        private readonly AppDbContext _context;
        public MessageRepository(Models.AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Models.Message>> GetAllMessagesAsync()
        {
            return await _context.Messages.ToListAsync();
        }

        public async Task<Message> UpdateMessage(Message message)
        {
            var existingMessage = await _context.Messages.FindAsync(message.Id);
            if (existingMessage == null)
            {
                throw new Exception("Message not found");
            }
            existingMessage.Text = message.Text;
            await _context.SaveChangesAsync();
            return existingMessage;
        }
    }
}
