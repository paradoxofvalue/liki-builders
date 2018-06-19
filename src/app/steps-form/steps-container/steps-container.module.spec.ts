import { StepsContainerModule } from './steps-container.module';

describe('StepsContainerModule', () => {
  let stepsContainerModule: StepsContainerModule;

  beforeEach(() => {
    stepsContainerModule = new StepsContainerModule();
  });

  it('should create an instance', () => {
    expect(stepsContainerModule).toBeTruthy();
  });
});
