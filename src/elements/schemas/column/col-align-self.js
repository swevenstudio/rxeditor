import {OptionFragment} from "../option-fragment"
import responsiveMeta from "../responsive"

let colAlignSelfSchema = {
  group:'columnOptions',
  isResponsive:true,
  xs:{
    label:'Align Self',
    widget:'OpSelect',
    list:{
      'align-self-auto':'Auto',
      'align-self-start':'Start',
      'align-self-end':'End',
      'align-self-center':'Center',
      'align-self-baseline':'Baseline',
      'align-self-stretch':'Stretch',
    },
  },
  //---------------------
  sm:{
    label:'Align Self',
    widget:'OpSelect',
    list:{
      'align-self-sm-auto':'Auto',
      'align-self-sm-start':'Start',
      'align-self-sm-end':'End',
      'align-self-sm-center':'Center',
      'align-self-sm-baseline':'Baseline',
      'align-self-sm-stretch':'Stretch',
    },
  },
  //---------------------
  md:{
    label:'Align Self',
    widget:'OpSelect',
    list:{
      'align-self-md-auto':'Auto',
      'align-self-md-start':'Start',
      'align-self-md-end':'End',
      'align-self-md-center':'Center',
      'align-self-md-baseline':'Baseline',
      'align-self-md-stretch':'Stretch',
    },
  },
  //---------------------
  lg:{
    label:'Align Self',
    widget:'OpSelect',
    list:{
      'align-self-lg-auto':'Auto',
      'align-self-lg-start':'Start',
      'align-self-lg-end':'End',
      'align-self-lg-center':'Center',
      'align-self-lg-baseline':'Baseline',
      'align-self-lg-stretch':'Stretch',
    },
  },
  //---------------------
  xl:{
    label:'Align Self',
    widget:'OpSelect',
    list:{
      'align-self-xl-auto':'Auto',
      'align-self-xl-start':'Start',
      'align-self-xl-end':'End',
      'align-self-xl-center':'Center',
      'align-self-xl-baseline':'Baseline',
      'align-self-xl-stretch':'Stretch',
    },
  },
  //---------------------
}//<--alignSelf

class ColAlignSelf extends OptionFragment{
  constructor(){
    super()
    this.schema = Object.assign({}, colAlignSelfSchema)

    this.metaFragment = Object.assign({}, responsiveMeta) 

    this.fieldName = 'colAlignSelf'
  }

  copyMeta(from, to){
    super.copyResponsiveMetaTo(from, to)
  }

  toViewModel(model, meta){
    let metaFragment = meta[this.fieldName]
    super.responsiveMetaFieldToViewModel(model, metaFragment)
  }
}

var addonAlignSelf = (node)=>{
  let colAlignSelf = new ColAlignSelf
  colAlignSelf.addon(node)
  return colAlignSelf
}

export {addonAlignSelf}
