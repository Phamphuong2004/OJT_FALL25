using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HelloAPI.Models;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Message> Messages { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Message>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("message_pkey");

            entity.ToTable("message"); // Đổi tên bảng sang 'message' cho đúng với database

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Text)
                .HasMaxLength(255)
                .HasColumnName("text");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
