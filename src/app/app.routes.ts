import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'home'
    },

    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog'
    },

    {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us'
    },
    
];
