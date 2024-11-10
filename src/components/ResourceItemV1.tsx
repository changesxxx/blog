import React, { memo } from "react";
import { motion } from 'framer-motion';
// /assets/images/page/home/line.svg

interface Resource {
  explain: string
  icon: string
  link: string
  title: string
}

interface ResourceProps {
  resource: Resource
}

const ResourceItemV1 = memo(({ resource }: ResourceProps) => {
  return (
    <motion.a
      initial={{ backgroundColor: 'rgb(255, 255, 255)' }} // 初始背景颜色
      whileHover={{ backgroundColor: 'rgb(247, 249, 252)' }} // 鼠标悬停时的背景颜色
      transition={{ duration: .2 }} // 动画持续时间
      className="my-4 flex gap-x-6 sm:flex-col px-6 py-6 rounded-lg cursor-pointer "
      href={resource.link}
      target="_blank"
    >
      <div className="mb-6 flex shrink-0 items-center justify-center">
        <img
          alt={resource.title}
          loading="lazy"
          width="48"
          height="48"
          decoding="async"
          data-nimg="1"
          className="h-12 w-12"
          style={{ color: "transparent" }}
          srcSet={`${resource.icon}?w=48&q=75 1x, ${resource.icon}?w=96&q=75 2x`}
          src={`${resource.icon}?w=96&q=75`}
        />
      </div>

      <div>
        <div className="text-[13px] font-medium leading-6 text-gray-700 sm:text-center">
          {resource.title}
        </div>
        <div className="text-[13px] leading-6 text-gray-600 sm:text-center">
          {resource.explain}
        </div>
      </div>
    </motion.a>
  );
});

export default ResourceItemV1;
