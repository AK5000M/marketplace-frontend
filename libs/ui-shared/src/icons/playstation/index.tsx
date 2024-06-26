import { useMemo } from 'react';

export const PlaystationIcon: React.FC<IconProps> = (props) => {
  const { color = 'currentColor', size = '1em' } = props;
  const _size = useMemo(() => (typeof size === 'string' ? size : `${size}px`), [size]);
  return (
    <svg height={_size} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5906 24.2098V42.2156L19.7731 42.2756C19.8735 42.3086 20.333 42.455 20.7943 42.6011C21.2556 42.7471 22.1836 43.0414 22.8565 43.2551C23.5295 43.4688 24.3154 43.7181 24.603 43.8092C24.8906 43.9003 25.7076 44.1595 26.4186 44.3853L27.7111 44.7957L27.7221 29.4813C27.7323 15.1928 27.7352 14.1543 27.7665 13.9803C27.8504 13.5131 27.9961 13.1417 28.1888 12.9038C28.5109 12.5063 28.9205 12.4069 29.4741 12.5919C30.2853 12.8631 30.736 13.4964 30.8992 14.5944C30.9219 14.7477 30.9462 15.0635 30.9573 15.3509C30.9684 15.6379 30.9765 18.3261 30.9767 21.7789L30.9771 27.7136L31.0709 27.7609C31.2277 27.84 31.6781 28.0279 31.9552 28.1298C32.5952 28.3654 33.259 28.5287 33.8879 28.6054C34.1738 28.6403 35.0482 28.64 35.2989 28.605C36.2255 28.4754 37.0306 28.1402 37.6966 27.6067C38.0452 27.3274 38.4601 26.8687 38.7289 26.4654C39.4423 25.3951 39.8376 24.1171 39.9998 22.3565C40.0343 21.9817 40.034 20.273 39.9993 19.7713C39.8012 16.9051 39.1471 15.0179 37.7833 13.3774C37.5597 13.1085 36.9997 12.5528 36.7011 12.3036C35.5966 11.3819 34.1613 10.5748 32.319 9.83965C29.9335 8.88764 24.4071 7.25137 21.0805 6.51205C20.5244 6.38848 19.6383 6.2041 19.6004 6.2041C19.595 6.2041 19.5906 14.3067 19.5906 24.2098ZM17.6073 28.1106C17.1401 28.2775 14.1268 29.3491 12.506 29.9248C10.8004 30.5305 8.84871 31.2244 7.62183 31.6613C7.04658 31.8661 6.42495 32.0865 6.24044 32.1511C4.63458 32.7132 3.19383 33.38 2.23485 34.005C1.57471 34.4352 1.26762 34.743 1.05902 35.1836C0.942782 35.4291 0.903175 35.5814 0.888513 35.8392C0.818733 37.0649 2.0708 38.2229 4.20783 38.9091C6.41988 39.6194 7.93086 39.968 9.78271 40.1952C10.8377 40.3246 11.4686 40.3645 12.6639 40.3774C14.4559 40.3968 15.5861 40.3106 17.4149 40.0149L17.9921 39.9216V37.8021C17.9921 35.7915 17.9903 35.6833 17.9576 35.6962C17.9137 35.7133 14.734 36.8679 14.2327 37.0487C13.5745 37.2861 13.1988 37.388 12.6343 37.4824C10.939 37.7659 9.25121 37.6305 8.58882 37.1578C8.15842 36.8507 8.23694 36.4606 8.80348 36.0913C8.99463 35.9667 9.25644 35.838 9.50643 35.7458C9.59869 35.7118 10.469 35.3996 11.4404 35.052C12.4118 34.7044 13.6728 34.2532 14.2426 34.0492C14.8124 33.8452 15.8825 33.4627 16.6206 33.1991C17.3586 32.9356 17.9692 32.7143 17.9774 32.7075C17.9856 32.7006 17.99 31.6334 17.9872 30.3358L17.9822 27.9767L17.6073 28.1106ZM37.4203 30.0433C35.0111 30.1482 31.9982 30.7041 29.7437 31.4596L29.2899 31.6117L29.2848 34.0538C29.2816 35.6277 29.2867 36.4959 29.2991 36.4959C29.3096 36.4959 29.4673 36.4433 29.6494 36.379C30.0271 36.2457 34.1129 34.8064 36.2363 34.0587C37.0177 33.7835 37.7849 33.5131 37.9411 33.4579C38.6348 33.2127 39.3988 33.0548 40.2522 32.9803C40.6112 32.9489 41.5334 32.9487 41.821 32.9799C42.6666 33.0716 43.2225 33.2504 43.4917 33.5171C43.8127 33.8352 43.6615 34.1997 43.0612 34.5545C42.7687 34.7275 42.7293 34.7426 40.5186 35.5292C39.8131 35.7802 38.4677 36.2595 37.5288 36.5942C36.59 36.9289 35.3556 37.3688 34.7858 37.5717C33.5959 37.9955 29.9531 39.2935 29.5563 39.4352L29.2899 39.5302L29.2848 41.89L29.2798 44.2497L29.3539 44.223C29.8276 44.052 32.6972 43.0209 37.4302 41.3209C46.6935 37.9937 47.1569 37.8266 47.4156 37.72C47.5513 37.6641 47.8587 37.5223 48.0988 37.405C49.0734 36.9286 49.7378 36.4851 50.2188 35.9899C50.714 35.4799 50.9135 35.0243 50.8827 34.4732C50.8564 34.0032 50.6332 33.5594 50.208 33.1319C49.6119 32.5326 48.7285 32.0508 47.3466 31.5712C46.3634 31.23 46.0452 31.1247 45.679 31.0193C43.8653 30.4971 41.9897 30.1878 39.8772 30.0622C39.4023 30.034 37.9004 30.0224 37.4203 30.0433ZM47.5896 40.9363C47.3777 40.97 47.2278 41.0174 47.0308 41.113C46.5693 41.337 46.2345 41.7073 46.0656 42.1805C45.9736 42.4383 45.9479 42.6205 45.9607 42.9239C45.9764 43.2945 46.0621 43.5629 46.2634 43.8722C46.5487 44.3108 47.0267 44.6231 47.5386 44.7057C47.7567 44.7409 48.1734 44.7211 48.3615 44.6667C49.7798 44.2563 50.2313 42.4883 49.1787 41.4667C48.9167 41.2124 48.6208 41.0475 48.2791 40.9652C48.1266 40.9285 47.7405 40.9123 47.5896 40.9363ZM48.0476 41.2531C48.4655 41.3054 48.8269 41.5091 49.0954 41.8439C49.2066 41.9825 49.3502 42.2679 49.388 42.4253C49.5234 42.9899 49.3752 43.532 48.9746 43.9376C48.78 44.1346 48.6089 44.2416 48.3402 44.3342C48.1661 44.3942 48.1395 44.3979 47.8695 44.3986C47.5325 44.3996 47.4157 44.3743 47.1492 44.2425C46.8302 44.0847 46.5957 43.8502 46.4379 43.5311C46.3061 43.2647 46.2808 43.1479 46.2817 42.8108C46.2825 42.5404 46.2861 42.5144 46.3469 42.3372C46.4277 42.1018 46.5354 41.9187 46.6907 41.7526C46.9522 41.473 47.2832 41.3015 47.6536 41.2536C47.8366 41.2299 47.8624 41.2299 48.0476 41.2531ZM47.0407 42.7903V43.8582L47.2232 43.8526L47.4058 43.8469L47.4111 43.4049L47.4164 42.9629L47.786 42.9736C48.3259 42.9892 48.3209 42.985 48.3478 43.4416C48.3577 43.6102 48.3764 43.7704 48.3893 43.7976C48.4117 43.8448 48.4211 43.8471 48.6147 43.8525L48.8168 43.8581V43.7884C48.8168 43.75 48.8074 43.7186 48.796 43.7186C48.754 43.7186 48.7223 43.5843 48.7097 43.3535C48.6916 43.0217 48.6715 42.9452 48.5804 42.8629L48.5055 42.7952L48.5616 42.7538C48.5924 42.7309 48.6425 42.6701 48.6728 42.6185C48.7233 42.5327 48.728 42.5079 48.728 42.3268C48.728 42.1534 48.7217 42.1169 48.6775 42.031C48.6497 41.977 48.5896 41.9044 48.5435 41.8692C48.3857 41.7489 48.3205 41.7388 47.6475 41.7302L47.0407 41.7225V42.7903ZM48.234 42.0916C48.3321 42.1382 48.3696 42.2249 48.3596 42.3823C48.3445 42.6194 48.2692 42.653 47.7522 42.653H47.4156V42.357V42.061H47.7925C48.0924 42.061 48.1826 42.0672 48.234 42.0916Z"
        fill={color}
      />
    </svg>
  );
};
