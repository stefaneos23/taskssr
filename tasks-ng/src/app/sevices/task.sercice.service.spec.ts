import { TestBed } from '@angular/core/testing';

import { TaskSerciceService } from './task.sercice.service';

describe('TaskSerciceService', () => {
  let service: TaskSerciceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSerciceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
