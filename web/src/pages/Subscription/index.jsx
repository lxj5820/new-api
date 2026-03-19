/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useContext } from 'react';
import SubscriptionsPage from '../../components/table/subscriptions';
import { StatusContext } from '../../context/Status';
import { Empty } from '@douyinfe/semi-ui';
import { useTranslation } from 'react-i18next';

const Subscription = () => {
  const [statusState] = useContext(StatusContext);
  const { t } = useTranslation();
  const enablePayment = statusState?.status?.enable_payment !== false;

  if (!enablePayment) {
    return (
      <div className='mt-[60px] px-2'>
        <Empty
          title={t('充值功能已关闭')}
          description={t('请联系管理员开启充值功能')}
          style={{ marginTop: 100 }}
        />
      </div>
    );
  }

  return (
    <div className='mt-[60px] px-2'>
      <SubscriptionsPage />
    </div>
  );
};

export default Subscription;
