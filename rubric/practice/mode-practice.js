/**
 * Created by lee on 11/18/17.
 */

console.log(12345%1000)
/***
 *
 * helper函数组要处理 百位一下的数字： 百，十， 个
 *
 * 原函数组要 主要处理 千位以上的数字： 千，百万，千位
 *
 * 1步： 从1000以上开始过滤，先处理1000以下的数
 * helper(nums%1000) + thousands[i] + " " + res
 *
 * note: less20， tens， thousands 开头都是有"" 空格的
 *
 *
 */

