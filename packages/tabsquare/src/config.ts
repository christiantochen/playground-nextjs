export type ConfigType = {
  API_URL: string
}

const Config: ConfigType = {
  API_URL: process.env.API_URL!,
}

export default Config