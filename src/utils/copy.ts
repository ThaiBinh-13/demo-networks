import useClipboard from 'vue-clipboard3';
import { ElMessage } from 'element-plus';
import { i18n } from '@/plugins/i18n.plugin';

export const createCopyClient = () => {
  const { toClipboard } = useClipboard();
  const { t } = i18n.global;
  const toCopy = (str: string) => {
    toClipboard(str)
      .then(() => {
        ElMessage({
          message: `${t('MESSAGE.COPIED')}!`,
          duration: 1000,
          type: 'success',
        });
      })
      .catch(err => {
        ElMessage({
          type: 'error',
          message: err.toString(),
          duration: 1000,
        });
      });
  };

  return {
    toCopy,
  };
};
