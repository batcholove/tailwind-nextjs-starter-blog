interface OutcomeCardProps {
  metric: string
  description?: string
}

const OutcomeCard = ({ metric, description }: OutcomeCardProps) => (
  <div className="border-primary-200 bg-primary-50 dark:border-primary-800 dark:bg-primary-950 rounded-lg border-2 p-6">
    <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold md:text-4xl">
      {metric}
    </div>
    {description && (
      <p className="mt-2 text-sm text-gray-600 md:text-base dark:text-gray-300">{description}</p>
    )}
  </div>
)

export default OutcomeCard
