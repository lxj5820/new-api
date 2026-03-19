package operation_setting

import "github.com/QuantumNous/new-api/setting/config"

type PaymentSetting struct {
	Enabled        bool              `json:"enabled"`
	AmountOptions  []int             `json:"amount_options"`
	AmountDiscount map[int]float64   `json:"amount_discount"`
}

var paymentSetting = PaymentSetting{
	Enabled:        true,
	AmountOptions:  []int{10, 20, 50, 100, 200, 500},
	AmountDiscount: map[int]float64{},
}

func init() {
	// 注册到全局配置管理器
	config.GlobalConfig.Register("payment_setting", &paymentSetting)
}

func GetPaymentSetting() *PaymentSetting {
	return &paymentSetting
}
