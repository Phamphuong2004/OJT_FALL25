using System;
using System.Collections.Generic;

namespace HelloAPI.Models;

public partial class Message
{
    public int Id { get; set; }

    public string Text { get; set; } = null!;
}
