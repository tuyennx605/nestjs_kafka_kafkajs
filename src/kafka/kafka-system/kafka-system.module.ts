import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsumerSystemService } from './consumer-system.service';
import { ProducerSystemService } from './producer-system.service';

@Module({
  imports: [ConfigModule],
  providers: [ProducerSystemService, ConsumerSystemService],
  exports: [ProducerSystemService, ConsumerSystemService],
})
export class KafkaSystemModule {}
