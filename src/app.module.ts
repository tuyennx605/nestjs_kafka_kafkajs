import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configurationYaml from '../configs/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurationYaml]
   })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
