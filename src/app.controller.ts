import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// 不可直接导入
import * as fs from 'fs';
import * as path from 'path';


@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    // const filePath = '/src/koalaFile.txt';
    const filePath = path.join(__dirname,'../../source/koalaFile.txt')
    const filePath2 = path.join(__dirname,'../../source/koalaFile2.txt')
    // -- 异步读取文件
    fs.readFile(filePath,'utf8',function(err,data){
        // console.log(data, 1);// 程序员成长指北
    });

    // -- 同步读取文件
    const fileResult = fs.readFileSync(filePath,'utf8');
    console.log(fileResult);// 程序员成长指北

    // flag: a 代表 追加写入
    fs.appendFile(filePath, '写入成功：程序员成长指北', function(err) {
      if (err) {
          throw err;
      }
      // 写入成功后读取测试
      var data = fs.readFileSync(filePath, 'utf-8');
      console.log('new data -->'+data);
    });

    // 拷贝文件
    fs.copyFileSync(filePath, filePath2);

    return this.appService.getHello();
  }
}
