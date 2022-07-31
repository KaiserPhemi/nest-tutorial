// Nest Libraries
import { Module } from '@nestjs/common';

// Modules
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, BookmarkModule],
})
export class AppModule { }
