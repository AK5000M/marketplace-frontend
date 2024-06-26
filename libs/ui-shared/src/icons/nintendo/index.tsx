import { useMemo } from 'react';

export const NintendoIcon: React.FC<IconProps> = (props) => {
  const { color = 'currentColor', size = '1em' } = props;
  const _size = useMemo(() => (typeof size === 'string' ? size : `${size}px`), [size]);
  return (
    <svg height={_size} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.85678 19.3557C4.86744 19.5044 3.19332 20.3742 2.0971 21.8286C0.951512 23.3486 0.590258 25.3897 1.13441 27.268C1.34694 28.0017 1.70995 28.699 2.20255 29.3197C2.39832 29.5664 2.86972 30.036 3.12466 30.2383C3.98291 30.9195 5.01102 31.3657 6.16073 31.5562C6.32324 31.5831 6.53975 31.6158 6.64184 31.6288C6.89858 31.6615 44.3087 31.6775 44.8228 31.6451C45.9569 31.5737 46.9808 31.282 47.8447 30.7844C49.5532 29.8002 50.6164 28.1877 50.8525 26.2226C50.8968 25.854 50.8968 25.1648 50.8525 24.7962C50.6836 23.3897 50.0985 22.1671 49.1318 21.2004C48.0322 20.1008 46.6042 19.4794 44.8912 19.3549C44.5633 19.331 7.17587 19.3319 6.85678 19.3557ZM45.0182 20.8747C45.8206 20.9892 46.2901 21.1244 46.8647 21.4066C48.1123 22.0193 48.9719 23.1352 49.2573 24.5123C49.3946 25.1749 49.3836 25.9619 49.2278 26.6232C49.0227 27.4936 48.6248 28.2006 47.9954 28.8131C47.1991 29.5879 46.1288 30.0382 44.8433 30.1392C44.4774 30.168 7.30522 30.1683 6.93396 30.1396C5.86394 30.0566 4.95911 29.7359 4.19252 29.1677C3.94495 28.9842 3.50866 28.5489 3.32655 28.3036C2.86886 27.6872 2.59112 27.0057 2.46654 26.1933C2.4181 25.8775 2.41818 25.1211 2.46667 24.806C2.5973 23.9575 2.91052 23.228 3.41473 22.598C4.22511 21.5855 5.50937 20.9611 6.98881 20.8605C7.11502 20.8519 15.6859 20.8463 26.0352 20.848C40.6611 20.8504 44.8891 20.8563 45.0182 20.8747ZM46.1515 22.1985C45.7452 22.2856 45.3888 22.6338 45.2925 23.0376C45.2602 23.1731 45.2648 23.4641 45.3014 23.6025C45.4314 24.0938 45.885 24.4377 46.4055 24.4397C46.7002 24.4408 46.9225 24.3656 47.1484 24.1885C47.4082 23.9847 47.5637 23.661 47.5651 23.321C47.5659 23.1176 47.5358 22.9839 47.447 22.796C47.3619 22.6161 47.1549 22.4009 46.9783 22.3085C46.7308 22.1791 46.429 22.1389 46.1515 22.1985ZM46.7182 22.3963C46.957 22.4732 47.1911 22.6988 47.286 22.9434C47.347 23.1005 47.361 23.4067 47.3145 23.5667C47.218 23.8989 46.9895 24.1371 46.6804 24.2277C46.5337 24.2708 46.2822 24.2681 46.1338 24.2218C45.8322 24.128 45.6109 23.8931 45.5158 23.5658C45.4697 23.4074 45.4841 23.1028 45.5452 22.9434C45.6028 22.7928 45.7469 22.6083 45.8766 22.519C45.9736 22.4522 46.1523 22.378 46.2687 22.356C46.3592 22.3389 46.6099 22.3614 46.7182 22.3963ZM5.84071 25.4899V28.3818H6.73944H7.6382L7.64316 26.3652L7.64815 24.3486L8.8987 26.3648L10.1493 28.381L11.0432 28.3814L11.9372 28.3818V25.4899V22.598H11.0481H10.159V24.6148C10.159 26.3153 10.1549 26.6271 10.1325 26.603C10.1179 26.5872 9.55379 25.6797 8.87898 24.5862L7.65202 22.598H6.74636H5.84071V25.4899ZM12.9337 23.1842V23.7704H13.8032H14.6727V23.1842V22.598H13.8032H12.9337V23.1842ZM38.6677 23.663V24.728L38.5065 24.641C37.8187 24.2696 37.061 24.2951 36.4206 24.7111C36.2612 24.8147 35.9456 25.1279 35.8354 25.2919C35.5531 25.7117 35.4342 26.1636 35.4834 26.6293C35.5349 27.1179 35.7235 27.5378 36.0345 27.8565C36.6876 28.5259 37.6599 28.6839 38.4968 28.2568L38.6677 28.1695V28.2756V28.3818H39.5275H40.3872V25.4899V22.598H39.5275H38.6677V23.663ZM45.9757 23.31V23.9658H46.0728H46.17L46.1754 23.6776L46.1808 23.3893L46.2909 23.3835L46.4011 23.3778L46.5808 23.6718L46.7606 23.9658H46.8663H46.9719L46.8809 23.8241C46.8309 23.7462 46.7478 23.6165 46.6962 23.5359L46.6024 23.3893L46.6847 23.3621C46.8763 23.2988 46.9416 23.1987 46.9297 22.987C46.9209 22.8307 46.8824 22.7648 46.7657 22.7055C46.6988 22.6714 46.6426 22.6656 46.3323 22.6603L45.9757 22.6542V23.31ZM46.6293 22.8406C46.7081 22.8735 46.7377 22.922 46.7377 23.0181C46.7377 23.1804 46.6624 23.2233 46.3772 23.2233H46.1711V23.0181V22.8129H46.3671C46.4919 22.8129 46.5872 22.823 46.6293 22.8406ZM21.6876 23.575V23.9658H21.2186H20.7496V24.2491V24.5324H21.2186H21.6876V26.4571V28.3818H22.5571H23.4266V26.4571V24.5324H23.9053H24.3841V24.2491V23.9658H23.9053H23.4266V23.575V23.1842H22.5571H21.6876V23.575ZM43.1717 24.2906C42.5055 24.3913 42.0167 24.6133 41.6141 24.998C41.4086 25.1943 41.2849 25.3607 41.1687 25.5974C41.0118 25.9167 40.9832 26.0463 40.9832 26.4376C40.9832 26.7256 40.9892 26.7905 41.028 26.9261C41.2633 27.7458 42.0159 28.3696 42.9902 28.5524C43.2664 28.6042 43.8089 28.5982 44.0803 28.5404C45.0556 28.3326 45.7739 27.7158 45.9894 26.9008C46.0582 26.6408 46.0623 26.266 45.999 26.0115C45.818 25.2824 45.2379 24.6913 44.444 24.4271C44.1491 24.329 43.9396 24.2956 43.5722 24.2884C43.3842 24.2848 43.2039 24.2857 43.1717 24.2906ZM26.2697 24.3277C25.1759 24.505 24.3763 25.195 24.1868 26.1249C24.1561 26.2757 24.1561 26.6385 24.1868 26.7893C24.3464 27.5724 24.9549 28.2031 25.8152 28.4772C26.9398 28.8355 28.233 28.4729 28.8765 27.6189C28.9886 27.4702 29.1713 27.1364 29.1713 27.0804C29.1713 27.0574 29.0352 27.0531 28.3128 27.0531H27.4542L27.4537 27.2631C27.4527 27.6905 27.3235 27.9349 27.0237 28.0762C26.7005 28.2285 26.2885 28.0944 26.1181 27.7814C26.0197 27.6005 26.0059 27.4997 26.0059 26.961V26.4669H27.6495H29.2932L29.279 26.3154C29.1913 25.3773 28.4019 24.5878 27.3189 24.3554C27.0663 24.3011 26.5222 24.2868 26.2697 24.3277ZM18.5335 24.3782C18.166 24.4318 17.778 24.6056 17.4838 24.8484C17.4339 24.8896 17.3877 24.9232 17.3812 24.9232C17.3746 24.9232 17.3692 24.8353 17.3692 24.7278V24.5324H16.5095H15.6497V26.4571V28.3818H16.509H17.3682L17.3736 27.0482L17.379 25.7146L17.4368 25.6006C17.5059 25.4641 17.6769 25.2992 17.8226 25.2285C18.2375 25.027 18.7598 25.2003 18.948 25.6019L19.0008 25.7146L19.0064 27.0482L19.0119 28.3818H19.8721H20.7323L20.7248 27.1654C20.7183 26.0885 20.7135 25.9323 20.683 25.8025C20.6018 25.4575 20.4398 25.1564 20.2149 24.9326C19.7978 24.5174 19.1174 24.293 18.5335 24.3782ZM32.6754 24.3839C32.3474 24.4376 32.0184 24.5774 31.7622 24.7719C31.688 24.8283 31.6111 24.8864 31.5913 24.9012C31.5568 24.9268 31.5552 24.9191 31.5552 24.7302V24.5324H30.6955H29.8357V26.4571V28.3818H30.6951H31.5544L31.5597 27.0384L31.565 25.6951L31.6129 25.5974C31.7618 25.2934 32.1627 25.0937 32.5058 25.1525C32.7864 25.2005 33.0484 25.4017 33.1363 25.6365C33.1761 25.7429 33.177 25.7753 33.177 27.0636V28.3818H34.0368H34.8965V27.2018C34.8965 25.9079 34.8929 25.8565 34.7779 25.5416C34.5325 24.869 33.8386 24.397 33.05 24.3661C32.9211 24.3611 32.7711 24.3682 32.6754 24.3839ZM12.9532 26.4571V28.3818H13.813H14.6727V26.4571V24.5324H13.813H12.9532V26.4571ZM43.7425 24.7888C43.8967 24.8454 44.0738 25.0239 44.1348 25.1843C44.2124 25.3884 44.2198 25.5153 44.2127 26.5186C44.2062 27.4398 44.2045 27.4776 44.1632 27.6002C44.0717 27.8716 43.8989 28.0383 43.6439 28.1012C43.2434 28.2001 42.8638 27.916 42.7917 27.4634C42.7651 27.2966 42.7648 25.5795 42.7913 25.4159C42.8247 25.2105 42.8816 25.0876 43.0027 24.9599C43.145 24.8098 43.2855 24.7485 43.4885 24.7478C43.5845 24.7475 43.6654 24.7606 43.7425 24.7888ZM27.0481 24.8421C27.3427 24.9871 27.4687 25.2545 27.4708 25.739L27.4714 25.8807H26.7361H26.0008L26.011 25.6218C26.0226 25.3267 26.0509 25.216 26.1517 25.0695C26.2925 24.8651 26.5042 24.7619 26.7612 24.7726C26.8929 24.7781 26.9426 24.7901 27.0481 24.8421ZM38.2982 25.0634C38.4893 25.1512 38.6175 25.3191 38.6653 25.5446C38.6953 25.6861 38.6953 27.1891 38.6653 27.3306C38.6173 27.5564 38.4943 27.7226 38.3062 27.8155C38.2203 27.858 38.1827 27.8638 37.9936 27.8639C37.7986 27.864 37.7696 27.8592 37.681 27.8122C37.5535 27.7446 37.448 27.637 37.387 27.5122C37.3105 27.3559 37.2955 27.1357 37.3042 26.3008C37.3115 25.5952 37.314 25.5525 37.3548 25.4417C37.4261 25.2478 37.5687 25.1031 37.7534 25.0373C37.9037 24.9837 38.1504 24.9955 38.2982 25.0634Z"
        fill={color}
      />
    </svg>
  );
};
