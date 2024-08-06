import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PinService } from './pin.service';

@Injectable()
export class PinCleanupService {
  constructor(private readonly pinService: PinService) {}

//   @Cron('0 * * * * *') // Her dakika çalışacak
//   async handleCron() {
//     await this.pinService.deleteExpiredPins();
//   }
}
