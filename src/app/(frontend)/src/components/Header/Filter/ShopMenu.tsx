import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const ShopMenu = ({
  columns,
  imageColumns,
}: {
  columns: { title: string; titleUrl: string; children: ReactNode }[]
  imageColumns?: { title: string; url: string; imageUrl: string }[]
}) => {
  const ColumnTitle = ({ title }: { title: string }) => {
    return (
      <motion.button
        type="button"
        className="text-light text-2xl underline "
        whileHover={{
          x: 5,
        }}
      >
        {title}
      </motion.button>
    )
  }

  const ColumnButton = ({ text }: { text: string }) => {
    return (
      <motion.button
        className="text-light text-md "
        whileHover={{
          x: 5,
        }}
      >
        {text}
      </motion.button>
    )
  }

  const Column = ({ title, children }: { title: string; children: ReactNode }) => {
    return (
      <div className="flex-col flex items-start space-y-4">
        <ColumnTitle title={title} />
        <div className="flex-col flex items-start space-y-3">{children}</div>
      </div>
    )
  }

  const ImageColumn = ({ title, url }: { title: string; url: string }) => {
    return (
      <div className="flex-col flex items-center justify-center space-y-4 relative group">
        <img src={url} alt={title} className="w-auto h-[15vh] rounded-lg" />
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <p className="text-light text-md  bg-primary px-4 rounded-lg group-hover:px-2 group-hover:bg-light group-hover:text-primary transition-all  ">
            {title}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-20 py-4 bg-primary h-auto max-h-[25vh] border-y-1 border-light flex items-start justify-between">
      <section className="flex justify-start space-x-8 w-full">
        {columns.map((item) => (
          <Column key={item.title} title={item.title}>
            {item.rows.map((row) => (
              <ColumnButton key={row.text} text={row.text} />
            ))}
          </Column>
        ))}
      </section>
      <section className="flex justify-end space-x-2 w-full">
        {imageColumns?.map((item) => (
          <ImageColumn key={item.title} title={item.title} url={item.imageUrl} />
        ))}
      </section>
    </div>
  )
}
