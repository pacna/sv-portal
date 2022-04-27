using System.Net;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using SV.Server.Services.Constants;

namespace SV.Server.Controllers.Attributes
{
    public class ValidCardPackAttribute: ValidationAttribute
    {
        private ISet<string> _validSet = new HashSet<string> { CardPackType.Basic, CardPackType.None, CardPackType.Promo};

        public ValidCardPackAttribute()
        {
        }

        protected override ValidationResult IsValid(object value, ValidationContext context)
        {
            if (this._validSet.Contains((string)value))
            {
                return ValidationResult.Success;
            }

            throw new HttpException(HttpStatusCode.PreconditionFailed, "Invalid constant");
        }       
    }
}