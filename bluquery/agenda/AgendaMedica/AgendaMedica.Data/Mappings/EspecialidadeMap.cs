using AgendaMedica.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AgendaMedica.Data.Mappings
{
    public class EspecialidadeMap : IEntityTypeConfiguration<Especialidade>
    {
        public void Configure(EntityTypeBuilder<Especialidade> builder)
        {
            builder.HasKey(c => c.EspecialidadeId);

            builder.Property(c => c.Nome)
                .HasColumnType("varchar(100)")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(c => c.Codigo)
                .HasColumnType("varchar(100)")
                .HasMaxLength(100)
                .IsRequired();

            builder.ToTable(nameof(Especialidade));

            builder.HasData(
                new Especialidade
                {
                    EspecialidadeId = 1,
                    Codigo = "PSIC.",
                    Nome = "Psicologia"
                },
                new Especialidade
                {
                    EspecialidadeId = 2,
                    Codigo = "CLIN. GERAL",
                    Nome = "Clínico Geral"
                },
                new Especialidade
                {
                    EspecialidadeId = 3,
                    Codigo = "PEDIATR.",
                    Nome = "Pediatria"
                },
                new Especialidade
                {
                    EspecialidadeId = 4,
                    Codigo = "ORTOP.",
                    Nome = "Ortopedia"
                }
            );
        }
    }
}
