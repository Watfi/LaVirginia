import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('La Virginia, Risaralda');
  
  // Navigation signals
  protected readonly isMobileMenuOpen = signal(false);
  
  // Clock signals
  protected readonly currentTime = signal(new Date());
  private clockIntervalId: any = null;

  ngOnInit(): void {
    // Start real-time clock updating every 1000ms
    this.clockIntervalId = setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.clockIntervalId) {
      clearInterval(this.clockIntervalId);
    }
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(prev => !prev);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  // Reactive formatted date and time in Spanish (Colombia)
  protected get liveDateTime(): string {
    const now = this.currentTime();
    
    // Day formatting
    const weekday = now.toLocaleDateString('es-CO', { weekday: 'short' });
    const day = now.getDate();
    const month = now.toLocaleDateString('es-CO', { month: 'short' });
    const year = now.getFullYear();
    
    // Time formatting
    const time = now.toLocaleTimeString('es-CO', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });

    // Capitalize first letter of weekday and month
    const capWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    const cleanMonth = month.endsWith('.') ? month.slice(0, -1) : month;
    const capMonth = cleanMonth.charAt(0).toUpperCase() + cleanMonth.slice(1);

    return `${capWeekday}, ${day} ${capMonth} ${year} — ${time}`;
  }
}
