import { Component, OnInit,} from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/user/user.service';

export interface Transaction {
  title: string;
  id: number;
  value: number;
  type: string;
}

const ELEMENT_DATA: Transaction[] = [
  { id: 1, title: 'Hydrogen', value: 1.0079, type: 'H' },
  { id: 2, title: 'Helium', value: 4.0026, type: 'He' },
  { id: 3, title: 'Lithium', value: 6.941, type: 'Li' }
];

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.sass']
})
export class StartComponent implements OnInit{
  user: User | null = null;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  isTransactionsListVisible = false;
  isRankingChartVisible = false;

  isFavorite = false;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.initializeUser('kkrychowski@interia.pl');

    setTimeout(() => {
      this.user = this.userService.user;
    },1000);

    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'],

        datasets: [{
          label: 'Position in global ranking',
          data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        }]
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
      }
    });
  }

  showTransactionsList() {
    this.isTransactionsListVisible = !this.isTransactionsListVisible;
  }

  showRankingChart(){
    this.isRankingChartVisible = !this.isRankingChartVisible;
  }

  setAsFavorite(){
    this.isFavorite = !this.isFavorite;
  }
}
