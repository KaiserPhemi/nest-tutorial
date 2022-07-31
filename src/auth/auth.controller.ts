// Nest Libraries
import { Controller, Post } from '@nestjs/common';

// services
import { AuthService } from './auth.service';

/**
 * Controller for authenticating users.
 */
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  signup() {
    return "I did sign up"
  }

  @Post('login')
  login() {
    return "I did log in"
  }
}

