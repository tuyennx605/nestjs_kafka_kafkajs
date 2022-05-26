import { Module } from '@nestjs/common';
import { KafkaModule } from 'src/kafka/kafka.module';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  imports: [KafkaModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
