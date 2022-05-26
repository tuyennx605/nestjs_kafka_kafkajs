import { Injectable } from '@nestjs/common';
import { ProducerSystemService } from './kafka-system/producer-system.service';
import { IMessageKafka } from './kafka.interfaces';

@Injectable()
export class ProducerService {
  constructor(private readonly producerSystemService: ProducerSystemService) {}

  async sendKafkaMessage(topic: string, messages: IMessageKafka[]) {
    return this.producerSystemService.produce({
      topic,
      messages,
    });
  }
}
