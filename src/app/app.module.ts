import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from '@/app/app-routing.module'
import { AppComponent } from '@/app/app.component'
import { HeroesComponent } from '@/app/heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { MessageComponent } from './message/message.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from '@/service/in-memory-data.service'
import { HeroSearchComponent } from './hero-search/hero-search.component'
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common'


@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessageComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		),
		AppRoutingModule
	],
	providers: [
		// { provide: APP_BASE_HREF, useValue: 'my-app' },
		// { provide: LocationStrategy, useClass: PathLocationStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
