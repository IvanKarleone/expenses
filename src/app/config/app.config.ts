import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from '@app/routes/app.routes';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { tuiValidationErrorsProvider } from '@taiga-ui/kit';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    NG_EVENT_PLUGINS,
    tuiValidationErrorsProvider({
      required: 'Required to fill',
    }),
  ],
};
