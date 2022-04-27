using System;
using System.ComponentModel.DataAnnotations;
using System.Net;

namespace SV.Server.Controllers.Attributes
{
    public class ValidEnumAttribute: ValidationAttribute
    {
        private Type _enumType { get; set; }

        public ValidEnumAttribute(Type enumType)
        {
            this._enumType = Nullable.GetUnderlyingType(enumType) ?? enumType; 
        }

        protected override ValidationResult IsValid(object value, ValidationContext context)
        {
            if (value == null)
            {
                return ValidationResult.Success;
            }

            return Enum.IsDefined(this._enumType, value) ? ValidationResult.Success : throw new HttpException(HttpStatusCode.PreconditionFailed, "Invalid enum type");
        }       
    }
}