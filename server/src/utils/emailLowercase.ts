import { BadRequestException } from '@nestjs/common';
import { registerDecorator, ValidationOptions } from 'class-validator';

export function ValidateEmail(validationOptions?: ValidationOptions) {
  return function (target: any, propertyName: string) {
    registerDecorator({
      target: target.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string): boolean {
          if (!value) {
            throw new Error('Email cannot be empty');
          }

          if (value !== value.toLowerCase()) {
            throw new BadRequestException(
              'Email addresses are case-sensitive. Please enter in lowercase.',
            );
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value.toLowerCase());
        },
        defaultMessage(): string {
          return this.error || 'Something went wrong';
        },
      },
    });
  };
}
