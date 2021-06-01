// 使用自己的配置文件
module.exports={
   configureWebpack:{
       resolve:{
           alias:{
               '@':'src',
               'assets':'@/assets',
               'common':'@/common',
               'network':'@/network',
               'components':'@/components',
               'views':'@/views'
           }
       }
   }
}