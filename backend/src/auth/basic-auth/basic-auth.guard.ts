import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization || '';
    const [type, credentials] = authHeader.split(' ');

    if (type === 'Basic') {
      const [username, password] = Buffer.from(credentials, 'base64')
        .toString()
        .split(':');
      return this.validate(username, password);
    }
    return false;
  }

  validate(username: string, password: string): boolean {
    return username === 'admin' && password === 'password123';
  }
}
