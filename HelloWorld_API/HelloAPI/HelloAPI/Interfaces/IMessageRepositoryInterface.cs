using HelloAPI.Models;

namespace HelloAPI.Interfaces
{
    public interface IMessageRepositoryInterface
    {
        Task<IEnumerable<Message>> GetAllMessagesAsync();
        Task<Message> UpdateMessage(Message message);
    }
}
