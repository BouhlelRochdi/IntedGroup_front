import { InjectionToken } from '@angular/core';
import { GlobalService } from 'src/app/features/services/global.service';

// SERVICES TOKENS
export const GLOBAL_SERVICE = new InjectionToken<GlobalService>('GlobalService');

