import { Component, OnInit } from '@angular/core';
import { CoinCapService } from '../../service/coincap.service';

@Component({
  selector: 'app-much-price',
  templateUrl: './much-price.component.html',
  styleUrls: ['./much-price.component.css'],
})
export class MuchPriceComponent implements OnInit {
  constructor(private coincapService: CoinCapService) {}

  isLoading = true;
  coins = [];

  ngOnInit(): void {
    this.coincapService.getMarketData().subscribe((data) => {
      console.log(data);
      this.coins = data.data.filter((element: { name: string }) => {
        element.name == 'Ethereum' ||
          element.name == 'Dogecoin' ||
          element.name == 'Bitcoin';
      });
      console.log(this.coins);
      this.isLoading = false;
    });
  }
}
