using FluentValidation.Results;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgendaMedica.Domain.Entities
{
    public class Especialidade
    {
        public int EspecialidadeId { get; set; }
        public string Nome { get; set; }
        public string Codigo { get; set; }

        [NotMapped]
        public ValidationResult ValidationResult { get; set; }
    }
}
