import {OptionFragment} from "../option-fragment"
import responsiveMeta from "../responsive"

let colOrderSchema = {
  group:'columnOptions',
  isResponsive:true,
  xs:{
    label:'Order',
    widget:'OpSelect',
    columns:2,
    list:{
      'order-first':'First',
      'order-last':'Last',
      'order-1':'1',
      'order-2':'2',
      'order-3':'3',
      'order-4':'4',
      'order-5':'5',
      'order-6':'6',
      'order-7':'7',
      'order-8':'8',
      'order-9':'9',
      'order-10':'10',
      'order-11':'11',
      'order-12':'11',
    },
  },
  //---------------------
  sm:{
    label:'Order',
    widget:'OpSelect',
    columns:2,
    list:{
      'order-sm-first':'First',
      'order-sm-last':'Last',
      'order-sm-1':'1',
      'order-sm-2':'2',
      'order-sm-3':'3',
      'order-sm-4':'4',
      'order-sm-5':'5',
      'order-sm-6':'6',
      'order-sm-7':'7',
      'order-sm-8':'8',
      'order-sm-9':'9',
      'order-sm-10':'10',
      'order-sm-11':'11',
      'order-sm-12':'11',
    },
  },
  //---------------------
  md:{
    label:'Order',
    widget:'OpSelect',
    columns:2,
    list:{
      'order-md-first':'First',
      'order-md-last':'Last',
      'order-md-1':'1',
      'order-md-2':'2',
      'order-md-3':'3',
      'order-md-4':'4',
      'order-md-5':'5',
      'order-md-6':'6',
      'order-md-7':'7',
      'order-md-8':'8',
      'order-md-9':'9',
      'order-md-10':'10',
      'order-md-11':'11',
      'order-md-12':'11',
    },
  },
  //---------------------
  lg:{
    label:'Order',
    widget:'OpSelect',
    columns:2,
    list:{
      'order-lg-first':'First',
      'order-lg-last':'Last',
      'order-lg-1':'1',
      'order-lg-2':'2',
      'order-lg-3':'3',
      'order-lg-4':'4',
      'order-lg-5':'5',
      'order-lg-6':'6',
      'order-lg-7':'7',
      'order-lg-8':'8',
      'order-lg-9':'9',
      'order-lg-10':'10',
      'order-lg-11':'11',
      'order-lg-12':'11',
    },
  },
  //---------------------
  xl:{
    label:'Order',
    widget:'OpSelect',
    columns:2,
    list:{
      'order-xl-first':'First',
      'order-xl-last':'Last',
      'order-xl-1':'1',
      'order-xl-2':'2',
      'order-xl-3':'3',
      'order-xl-4':'4',
      'order-xl-5':'5',
      'order-xl-6':'6',
      'order-xl-7':'7',
      'order-xl-8':'8',
      'order-xl-9':'9',
      'order-xl-10':'10',
      'order-xl-11':'11',
      'order-xl-12':'11',
    },
  },
  //---------------------
}//<--order

class ColOrder extends OptionFragment{
  constructor(){
    super()
    this.schema = Object.assign({}, colOrderSchema)

    this.metaFragment = Object.assign({}, responsiveMeta) 

    this.fieldName = 'colOrder'
  }

  copyMeta(from, to){
    super.copyResponsiveMetaTo(from, to)
  }

  toViewModel(model, meta){
    let metaFragment = meta[this.fieldName]
    super.responsiveMetaFieldToViewModel(model, metaFragment)
  }
}

var addonOrder = (node)=>{
  let colOrder = new ColOrder
  colOrder.addon(node)
  return colOrder
}

export {addonOrder}
