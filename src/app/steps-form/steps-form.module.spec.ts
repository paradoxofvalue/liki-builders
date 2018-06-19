import { StepsFormModule } from './steps-form.module';

describe('StepsFormModule', () => {
  let stepsFormModule: StepsFormModule;

  beforeEach(() => {
    stepsFormModule = new StepsFormModule();
  });

  it('should create an instance', () => {
    expect(stepsFormModule).toBeTruthy();
  });
});
