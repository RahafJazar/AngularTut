import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  country: string | null = '';
  city: string | null = '';
  page: number = 1;
  sort: string | null = '';
  querParam1: Params = { test1: 'ssss' }

  customRoute: CRoute = new CRoute();

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // == using route snapshot param map
    // this.country = this.route.snapshot.paramMap.get('country');
    // this.city = this.route.snapshot.paramMap.get('city');
    // this.page = parseInt(this.route.snapshot.paramMap.get('page') || '1');
    // this.sort = this.route.snapshot.paramMap.get('sort');

    //using path param map observable  
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('paramMap .... updated')
      this.country = params.get('country');
      this.city = params.get('city');
      this.page = parseInt(params.get('page') || '1');
      this.sort = params.get('sort');
    })

    //query params
    this.route.queryParamMap.subscribe((queryParams: Params) => {
      console.log('queryParams .... updated')
      console.log('test1', queryParams['test1'])

      console.log('test2', queryParams['test2'])

    })

    //use sample of route 

    this.customRoute.paramMap.subscribe((params: { num: string }) => {
      console.log(params)
      alert(params.num)

    })




  }
  sendValue(): void {

    this.customRoute.paramMap.next({ num: Math.random() })


    //call fetch data function using callback technique
    this.fetchData('www.google.com',
      (data: any) => {
        console.log('success', data)
        this.fetchData('www.facebook.com',
          (data: any) => {
            this.fetchData('www.instagram.com',
              (data: any) => {
                this.fetchData('www.gmail.com',
                  (data: any) => {

                  },
                  (error: any) => { },
                )
              },
              (error: any) => { },
            )
          },
          (error: any) => { },
        )
      },
      (error: any) => {
        console.error('failer', error)
      }
    )


    //call fetchh data function using Promise in nested asynchronous  func
    this.fetchDataUsingPromise('www.myapi.com/login', null)
      .then((logiData: any) => {
        return this.fetchDataUsingPromise('www.myapi.com/user', logiData);
      })
      .then((userData: any) => {
        return this.fetchDataUsingPromise('www.myapi.com/company', userData);
      }).catch((error: any) => {
        return error
      })


    //call fetch data function using Promise technique

    this.fetchDataUsingPromise('www.myapi.com/login', null).then((data: any) => {
      return data;
    }).catch((error: any) => {
      return error
    })
    //call fetch data function using callback technique
    this.fetchData('www.myapi.com/login', (data: any) => {
      return data
    },
      (error: any) => {
        return error
      })
  }


  //#region real implementation on Fetch
  // fetch().then((value:Response)=>{}).catch((reason:any)=>{})


  //use callback technique 
  fetchData(url: string, successFn: any, failerFn: any): void {
    setTimeout(() => {
      if (url.includes('https')) {
        successFn({ url: url, data: url })
      }
      else {
        failerFn({ url: url, error: "invalid provided url" })
      }
    }, 2000);
  }

  //use Promise technique
  fetchDataUsingPromise(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.includes('https')) {
          resolve({ url: url, data: url })
        }
        else {
          reject({ url: url, error: "invalid provided url" })
        }
      }, 2000);
    })
  }
}




class Observ<T> {
  data!: T;
  callback: any;
  subscribe(callback: any): void {
    this.callback = callback;
  }
  next(value: T): void {
    this.data = value;
    this.callback(this.data);
  }
}
class CRoute {
  paramMap: Observ<object> = new Observ();
}