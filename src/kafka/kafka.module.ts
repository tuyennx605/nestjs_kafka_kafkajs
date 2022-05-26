import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { KafkaSystemModule } from './kafka-system/kafka-system.module';
import { ProducerService } from './producer.service';

@Module({
  imports: [KafkaSystemModule],
  controllers: [ConsumerController],
  providers: [ConsumerService, ProducerService],
  exports: [ProducerService],
})
export class KafkaModule {}
