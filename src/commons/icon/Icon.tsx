import React from 'react'
import { Tooltip } from 'antd'

class ICON {
  static COLLAPSED_MENU = (<i className="fal fa-bars" />)

  static HOME = (<i className="fas fa-home" />)

  static ARROW_RIGHT = (<i className="fal fa-angle-right" />)

  static MENU_ICON = {
    DASHBOARD: <i className="far fa-tachometer-alt" />,
    CATE: <i className="fas fa-bars" />,
    PRODUCT: <i className="fas fa-box-open" />,
    CUSTOMER: <i className="fas fa-users" />,
    ORDER: <i className="fas fa-cart-arrow-down" />,
    LIVE_STREAM: <i className="fas fa-video" />,
    CHAT: <i className="fas fa-comments" />,
    NOTIFICATION: <i className="far fa-bells" />,
    REPOST: <i className="fas fa-chart-area" />,
    ACCOUNT: <i className="fas fa-user-circle" />,
    SHOP: <i className="far fa-store" />,
    CONFIG: <i className="fal fa-cog" />,
    COMBO: <i className="far fa-recycle" />,
    VOUCHER: <i className="fab fa-dropbox" />,
    BANNER: <i className="fal fa-file-spreadsheet" />,
    DRIVER: <i className="fas fa-motorcycle" />,
    LETTERS: <i className="fas fa-envelope" />,
    GLOBE: <i className="fas fa-globe-americas" />,
  }

  static HEADER_ICON = {
    NOTIFICATION: <i className="fal fa-bell" />,
    USER: <i className="fal fa-user-alt"></i>,
  }

  static SWITCH = {
    TOGGLE_OFF: <i className="far fa-toggle-off" />,
    TOGGLE_ON: <i className="fal fa-toggle-on" />,
  }

  static BACK_TOP = (<i className="fal fa-arrow-to-top" />)

  static BUTTON = {
    DISABLE: <i className="fa fa-toggle-off fa-2x" />,
    ENABLE: <i className="fa fa-toggle-on fa-2x" />,
    EDIT: <i className="fal fa-edit" />,
    DELETE: <i className="fal fa-trash-alt" />,
    ADD: <i className="far fa-plus" />,
    RESET: <i className="fal fa-repeat" />,
    SAVE: <i className="fas fa-save" style={{ color: '#1890ff' }} />,
    MINUS: <i className="fal fa-minus-circle" />,
    ACCEPT: <i className="fal fa-check-circle" />,
    CANCEL: <i className="fal fa-times-circle" />,
  }

  static GO_BACK_HEADER = (<i className="fas fa-chevron-left fa-1x" />)
  static STAR = (<i className="fas fa-star" />)
  static BAG = (<i className="fal fa-shopping-bag" />)
  static DETAIL = (
    <Tooltip title={'Xem chi tiết'}>
      <i className="fas fa-info-circle" />
    </Tooltip>
  )
  static PHONE = (<i className="fal fa-phone" />)
  static MAIL = (<i className="fal fa-envelope" />)
  static LOATION = (<i className="fal fa-map-marker-alt" />)
}

export default ICON
