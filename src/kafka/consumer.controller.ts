import { Controller } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ConsumerSystemService } from './kafka-system/consumer-system.service';
import { KafkaTopicEnum } from './kafka.enum';

@Controller()
export class ConsumerController implements OnModuleInit {
  constructor(
    private readonly consumerSystemService: ConsumerSystemService,
    private readonly consumerService: ConsumerService,
  ) {}

  async onModuleInit() {
    try {
      await this.consumerSystemService.consume(
        [
          { topic: KafkaTopicEnum.TUYENNX, fromBeginning: true },
          { topic: KafkaTopicEnum.TUYENNX1, fromBeginning: true },
        ], // fromBeginning : là đọc từ đâu, từ đầu hay từ đâu theo groupId, nghĩa là nếu groupId đọc đến đâu thì nó sẽ đọc tiếp từ đấy trong khi bị lỗi
        {
          eachMessage: async ({ topic, partition, message }) => {
            const value = message.value.toString();

            switch (topic) {
              case KafkaTopicEnum.TUYENNX:
                this.handleTopicTuyennx(value);
                break;

              case KafkaTopicEnum.TUYENNX1:
                this.handleTopicTuyennx1(value);
                break;
            }

            console.log({
              key: (message.key || '').toString(),
              value: message.value.toString(),
              topic: topic.toString(),
              partition: partition.toString(),
              headers: message.headers,
            });
          },
        },
      );
    } catch (error) {
      console.log(111111, error);
    }
  }

  private async handleTopicTuyennx(value) {
    const bodyData = JSON.parse(value);
    console.log(111112222, bodyData.name);
    switch(bodyData.name) {
      case '....':
      break;
    }
  }

  private async handleTopicTuyennx1(value) {
    const bodyData = JSON.parse(value);
    console.log(545454, bodyData.name);
  }
}
