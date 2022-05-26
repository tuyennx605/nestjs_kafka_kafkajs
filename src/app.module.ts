import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import configurationYaml from '../configs/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurationYaml]
   }),
    CatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
