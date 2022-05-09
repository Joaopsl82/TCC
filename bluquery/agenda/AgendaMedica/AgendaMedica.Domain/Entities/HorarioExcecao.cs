using FluentValidation.Results;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgendaMedica.Domain.Entities
{
    public class HorarioExcecao
    {
        public int HorarioExcecaoId { get; set; }
        public DateTime Data { get; set; }
        public TimeSpan HoraInicio { get; set; }
        public TimeSpan HoraFim { get; set; }
        public bool Atende { get; set; }
        public int AgendaId { get; set; }
        public virtual Agenda Agenda { get; set; }

        [NotMapped]
        public ValidationResult ValidationResult { get; set; }
    }
}
